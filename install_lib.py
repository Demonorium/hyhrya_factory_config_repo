import os
import shutil
import threading
import time
import urllib.error as error
import urllib.request
from urllib.parse import unquote

try:
    import tkinter as tk
    from tkinter import ttk, messagebox
    import webbrowser
except:
    pass


def get_filename_from_url(url):
    """Извлекаем имя файла из URL"""
    # Получаем последнюю часть URL
    filename = url.split('/')[-1]
    # Декодируем URL-encoded символы
    filename = unquote(filename)
    return filename

class DownloadCheckerApp:
    def __init__(self, root, errors):
        self.root = root
        self.root.title("Ручное скачивание модов")
        self.root.geometry("600x500")
        
        # Папка для проверки файлов
        self.mods_folder = "mods"        
        self.links = errors
        
        # Словарь для хранения статуса файлов
        self.file_status = {}
        for link in self.links:
            filename = get_filename_from_url(link)
            self.file_status[filename] = False
        
        # Флаг для остановки проверки
        self.checking = True
        
        # Создаем интерфейс
        self.create_widgets()
        
        # Запускаем проверку в отдельном потоке
        self.check_thread = threading.Thread(target=self.check_files_periodically, daemon=True)
        self.check_thread.start()
    

    
    def create_widgets(self):
        # Заголовок
        title_label = ttk.Label(self.root, text="Список модов для загрузки", 
                                font=("Arial", 14, "bold"))
        title_label.pack(pady=10)
        
        # Инструкция
        instruction = ttk.Label(self.root, 
                               text="Скачайте все моды по ссылкам ниже и разместите их в папке 'mods'",
                               wraplength=550)
        instruction.pack(pady=5)
        
        # Фрейм для списка ссылок с прокруткой
        list_frame = ttk.Frame(self.root)
        list_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=10)
        
        # Создаем Treeview для отображения ссылок и статусов
        self.tree = ttk.Treeview(list_frame, columns=("status", "link"), 
                                show="headings", height=8)
        
        # Настраиваем колонки
        self.tree.heading("status", text="Статус")
        self.tree.heading("link", text="Ссылка для скачивания")
        self.tree.column("status", width=100, anchor=tk.CENTER)
        self.tree.column("link", width=450)
        
        # Добавляем scrollbar
        scrollbar = ttk.Scrollbar(list_frame, orient=tk.VERTICAL, command=self.tree.yview)
        self.tree.configure(yscrollcommand=scrollbar.set)
        
        # Размещаем treeview и scrollbar
        self.tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        
        # Заполняем treeview данными
        for i, link in enumerate(self.links):
            filename = get_filename_from_url(link)
            status_text = "❌ Не скачан" if not self.file_status[filename] else "✅ Скачан"
            self.tree.insert("", tk.END, iid=i, values=(status_text, link))
        
        self.tree.tag_configure("link", foreground="blue", font=("Arial", 10, "underline"))
        self.tree.bind("<Button-1>", self.on_tree_click)

        # Фрейм для кнопок
        button_frame = ttk.Frame(self.root)
        button_frame.pack(pady=20)
        
        # Кнопка "Я всё скачал" (изначально неактивна)
        self.done_button = ttk.Button(button_frame, text="Я всё скачал", 
                                     state=tk.DISABLED, command=self.on_all_downloaded)
        self.done_button.pack(side=tk.LEFT, padx=5)
        
        # Кнопка "Я всё скачал, но кнопка серая"
        self.force_done_button = ttk.Button(button_frame, 
                                          text="Я всё скачал, но кнопка серая",
                                          command=self.on_force_done)
        self.force_done_button.pack(side=tk.LEFT, padx=5)
        
        # Статус бар
        self.status_label = ttk.Label(self.root, text="Проверка файлов...")
        self.status_label.pack(pady=5)
        
        # Информация о папке
        folder_path = os.path.abspath(self.mods_folder)
        folder_info = ttk.Entry(self.root, 
                               font=("Arial", 9))
        folder_info.insert(0, f"Качать сюда: {folder_path}")
        folder_info.config(state="readonly")
        folder_info.pack(pady=5, padx=20, fill=tk.X)

        def ctrlEvent(event):
            if event.state == 4 and event.keysym == 'c':
                content = folder_info.selection_get()
                self.root.clipboard_clear()
                self.root.clipboard_append(content)
                return "break"
            elif event.state == 4 and event.keysym == 'v':
                folder_info.insert('end', self.root.selection_get(selection='CLIPBOARD'))
                return "break"
            else:
                return "break"
    

        folder_info.bind("<Key>", lambda e: ctrlEvent(e))
    
    def check_files(self):
        """Проверяем наличие всех файлов в папке mods"""
        all_downloaded = True
        
        for link in self.links:
            filename = get_filename_from_url(link)
            file_path = os.path.join(self.mods_folder, filename)
            
            if os.path.exists(file_path):
                self.file_status[filename] = True
            else:
                self.file_status[filename] = False
                all_downloaded = False
        
        return all_downloaded
    
    def update_ui(self):
        """Обновляем интерфейс на основе текущего статуса"""
        # Обновляем статусы в treeview
        for i, link in enumerate(self.links):
            filename = get_filename_from_url(link)
            status_text = "❌ Не скачан" if not self.file_status[filename] else "✅ Скачан"
            self.tree.item(i, values=(status_text, link))
        
        # Проверяем, все ли файлы скачаны
        all_downloaded = all(self.file_status.values())
        
        # Активируем кнопку, если все файлы скачаны
        if all_downloaded:
            self.done_button.config(state=tk.NORMAL)
            self.status_label.config(text="Все файлы загружены! Можете нажать 'Я всё скачал'")
        else:
            self.done_button.config(state=tk.DISABLED)
            downloaded_count = sum(self.file_status.values())
            total_count = len(self.file_status)
            self.status_label.config(text=f"Загружено {downloaded_count} из {total_count} модов")
    
    def check_files_periodically(self):
        """Периодическая проверка файлов каждые 10 секунд"""
        while self.checking:
            # Проверяем файлы
            self.check_files()
            
            # Обновляем UI в главном потоке
            self.root.after(0, self.update_ui)
            
            # Ждем 10 секунд
            time.sleep(5)
    
    def on_all_downloaded(self):
        """Обработчик нажатия на кнопку 'Я всё скачал'"""
        self.checking = False
        self.root.quit()
    
    def on_force_done(self):
        """Обработчик нажатия на кнопку 'Я всё скачал, но кнопка серая'"""
        response = messagebox.askyesno("Подтверждение", 
                                      "Вы уверены, что все файлы загружены?\nПриложение будет закрыто.")
        if response:
            self.checking = False
            self.root.quit()
    
    def on_closing(self):
        """Обработчик закрытия окна"""
        self.checking = False
        self.root.quit()

    def on_tree_click(self, event):
        """Обработчик клика по Treeview"""
        item = self.tree.identify_row(event.y)
        column = self.tree.identify_column(event.x)
        
        if item and column == "#2":  # Колонка с ссылками
            values = self.tree.item(item, "values")
            if values and len(values) > 1:
                url = values[1]
                if url.startswith(("http://", "https://")):
                    # Открываем ссылку в браузере
                    webbrowser.open_new(url)
                    self.tree.item(item, tags=("link", "visited"))


def check_is_server():
    return os.path.exists('./world')

def install_mods(*to_download_mods):
    errors = []

    for (mod_url, side) in to_download_mods:
        if check_is_server() and side == 'client':
            print('Skip as server...', mod_url)

        filename = get_filename_from_url(mod_url)
        success = os.path.exists('update/mods/' + filename)
        if not success and not os.path.exists('mods/' + filename):
            try:
                urllib.request.urlretrieve(mod_url, 'update/mods/' + filename)
                print('Mod', filename, 'downloaded')
                success = True
            except Exception as e:
                print('Error in mod download:', filename, 'link:', mod_url)
                print(e)
                errors.append(mod_url)
        elif success:
            print('Mod', filename, 'already downloaded')
        else:
            print('Mod', filename, 'already installed')

        if success and not os.path.exists('mods/' + filename):
            shutil.copy('update/mods/' + filename, 'mods/')
            print('Mod', filename, 'installed')

    
    if not os.path.exists('update/mods'):
        os.mkdir('update/mods')


    if not check_is_server() and len(errors) > 0:
        root = tk.Tk()
        app = DownloadCheckerApp(root, errors)
        
        # Обработчик закрытия окна
        root.protocol("WM_DELETE_WINDOW", app.on_closing)
        
        root.mainloop()

    
def disable_mods(*mods):
    for mod in mods:
        file = './mods/' + mod
        if os.path.exists(file):
            print('disabling', mod)
            os.rename(file, file + '.disabled')
        else:
            print('WARN: not found', mod)


def enable_mods(*mods):
    for mod in mods:
        trg = './mods/' + mod
        file = './mods/' + mod + '.disabled'
        
        if os.path.exists(file):
            print('enabling', mod)
            os.rename(file, trg)
        else:
            print('WARN: not found', mod)
        

def delete_mods(*mods):
    for mod in mods:
        file1 = './mods/' + mod
        if os.path.exists(file1):
            print('deleting', file1)
            os.remove(file1)
        else:
            file1 = './mods/' + mod + '.disabled'
            if os.path.exists(file1):
                print('deleting', file1)
                os.remove(file1)


def simple_install(*mods):
    for (file, desc) in mods:
        src = './update/hyhrya_factory_config_repo-master/custom_mods/' + file
        trg = './mods/' + file
        
        if os.path.exists(src):
            if os.path.exists(trg):
                print('WARN: mod exists', file)
                os.remove(trg)
            
            print('installation', file, '(' + desc + ')')
            
            shutil.copy(src, trg)
        else:
            print('ERROR: mod cannot be installed', file)