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


repo.git.add(".")
repo.git.add("-u")

print('commit...')
repo.index.commit('version: ' + str(version))
print('remote search')
origin = repo.remote(name='origin')
print('remote found')
print('push...')
origin.push()
print('success')