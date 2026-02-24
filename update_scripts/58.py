import os

if __name__ == "__main__":
    print('Чтение настроек...')
    if os.path.exists('options.txt'):
        lines = []
        with open('options.txt', 'r', encoding='utf-8') as f:
            lines = f.readlines()

        print('Сброс всех кейбиндов')
        lines = list(filter(lambda x: 'key_' not in x, lines))

        print('Чтение установочного файла...')
        valid_lines = []
        with open('./update/hyhrya_factory_config_repo-master/options.txt', 'r', encoding='utf-8') as f:
            valid_lines = f.readlines()

        print('Импорт кейбиндов')
        valid_lines = list(filter(lambda x: 'key_' in x, valid_lines))
        lines.extend(valid_lines)

        print('Сохранение файла настроек')
        with open('options.txt', 'w', encoding='utf-8') as f:
            for line in lines:
                f.write(line)
    else:
        print('Файл настроек не обнаружен, обновление', 58, 'пропущено')
