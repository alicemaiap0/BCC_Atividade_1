# BCC_Atividade_1
# Comandos de Git, GitHub e GitFlow

## Básico

- `git clone <url>` - baixa o repositório
- `git status` - mostra o que mudou
- `git add .` - adiciona as alterações
- `git commit -m "mensagem"` - cria o commit
- `git push` - envia os commits para o GitHub
- `git pull` - baixa as atualizações do GitHub
- `git log --oneline` - mostra o histórico

## Branches

- `git branch` - lista as branches
- `git switch -c <nome>` - cria uma branch e troca para ela
- `git switch <nome>` - troca de branch
- `git merge <nome>` - junta a branch indicada na atual
- `git branch -d <nome>` - apaga a branch

## Consertar commits

- `git commit --amend -m "nova mensagem"` - corrige a mensagem do último commit
- `git restore <arquivo>` - descarta as alterações de um arquivo
- `git reset --soft HEAD~1` - desfaz o último commit e mantém o código
- `git revert <hash>` - cria um commit que desfaz outro

## GitFlow

- `main` - versão final
- `develop` - desenvolvimento
- `feature/<nome>` - cada tarefa nova (sai da `develop` e volta para ela por Pull Request)

Fluxo de uma tarefa:

- `git switch develop` e `git pull` - atualiza a develop
- `git switch -c feature/<nome>` - cria a branch da tarefa
- `git push -u origin feature/<nome>` - envia a branch e depois abre o Pull Request no GitHub

