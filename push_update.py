from git import Repo

with open('modpack_version.txt', mode='r', encoding='utf-8') as f:
    version = int(f.readline())
version += 1
with open('modpack_version.txt', mode='w', encoding='utf-8') as f:
    f.write(str(version))

print('new version:', version)

repo = Repo('./')
print('repo initiated:', repo.common_dir)
print('index...')


repo.git.add("-u")
# repo.index.add('modpack_version.txt')
# repo.index.add('push_update.py')
# repo.index.add('install_update.py')
# repo.index.add('check_update.py')

# repo.index.add('config/*')
# repo.index.add('kubejs/assets/*')
# repo.index.add('kubejs/client_scripts/*')
# repo.index.add('kubejs/config/*')
# repo.index.add('kubejs/server_scripts/*')
# repo.index.add('-u kubejs/data/*')
# repo.index.add('kubejs/startup_scripts/*')
# repo.index.add('defaultconfigs/*')
# repo.index.add('keybinding presets/*')
# repo.index.add('minemenu/*')
# repo.index.add('server_configs/*')

print('commit...')
repo.index.commit('version: ' + str(version))
print('remote search')
origin = repo.remote(name='origin')
print('remote found')
print('push...')
origin.push()
print('success')