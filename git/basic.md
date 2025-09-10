![]()

## 스냅샷 
- 마치 폴라로이드 카메라로 풍경을 기록하듯이
- 파일의 상태를 기록하는 시스템 
- 한 번 기록하면 변경할 수 없다. 

## 3가지 영역 
- 작업 트리(Working Directory) : 현재 내가 작업중인 폴더 
- 스테이징 영역 : 변경 사항이 있는 파일들 중, Commit에 포함시키고 싶은 파일들을 모아두는 별도의 영역, 무대에 올린다라고 생각하면 됨. (한번 commit을 하면 변경이 까다로워지므로 해당 절차가 필요하다.)
- 저장소 : commit을 하면 해당 commit이 repository에 영구 저장된다. 

## 파일의 3가지 상태 
- 수정 : 
- 스테이징 : 
- 커밋 : 

## 필수 명령어 

- `git init`  : 이 작업 디렉토리를 이제 git으로 관리하겠어
- `git add .` : 이번 작업을 하면서, 변경 사항이 발생한 것을 한꺼번에 Staging Area로 옮긴다. 
- `git commit -m "커밋 메시지` : 커밋을 하면 해당 커밋이 repository에 영구 저장됨
- `git resest —hard HEAD` : reset에서 hard 라는 옵션으로 옵션을 깔끔하게 지우고, 가장 최신 커밋으로 날아가기 위한 명령어!
- `git log` : 기존의 커밋들을 알려준다.
- `git log --oneline`: 커밋 메시지만 간단히 보인다. 

## git hub랑 연동해서 사용하는 명령어 

- `git remote add origin [URL 주소]`
- `git status` 
- `git push : local -> remote로 옮겨주기 위해서는 git push를 누르면 된다.` 
- `git branch -M main`  


### VSCODE GUI안에서 작동법
- changes : 바뀐 코드를 알려준다. git add .를 누를 시, changes -> Stages changes로 바뀐다. 
- changes에 있는 파일의 마우스 오른쪽 클릭 후, + 버튼을 눌러서 stages로 올릴 수 있고, 여기서 다시 - 버튼을 누르면 changes로 내려간다.
- commit 버튼을 누르면 에디팅 ~~가 뜨는데 그 위에 메시지를 입력해준다.
- commit 후에 publish branch 버튼을 누르면 git push와 같은 역할을 하여, 자동으로 remote 레파지토리에 올라간다.  


### 간단 실습 
- `git add . GEMINI.md` : 특정 파일 하나만 staging area로 옮겨줌. 
파일 옆에 U->A로 바뀌네? 이걸 CLI 상에서 확인할려면 git status라고 치면 Changes to be committed:에 새로 값이 업로드 되어있다. Untracked files는 워크 디렉토리에 있다. 
- `git add .` : 특정 파일이 아닌 전체 파일을 staging area로 옮겨줌. 
- `git commit` : 커밋을 진행 시에 vscode 상에서 commit_editmsg 라는 파일이 같이 뜬다. 이는 커밋 메시지를 작성할 수 있게 띄워주기 위함이다. (커밋 후에는 vscode 상에서 파일명 옆에 변경 사항이 없어진다.)
- `git commit -m "커밋 메시지"` : 커밋 메시지를 바로 입력할 수 있게 한다. GUI 상에서 커밋 메시지를 입력하게 하는 창이 안뜬다. 
- `git status` : 다시 다른 파일을 변경해보니, 파일명 옆에 M이 뜨고, 노란색이 뜬다. git status를 클릭하니, modified: ~ 부분에 수정한 파일이 뜬다. 

### 잘 안쓰지만 알면 좋은 명령어 
- git diff

### 좋은 커밋이란? 
- 처음에는 좋은 커밋 메시지나, 규칙에 구애받기보다 많이 해보면서 경험을 축적해보는 것도 좋은 것 같다?! 
- 틈틈히 잘 해주는 것이 중요하다. 

# 깃 명령어 

## 변경된 파일을 스테이징 영역으로 이동하는 명령어
- `git add <파일 명>`
- `git add .` 

## 스테이징 영역에 있는 파일을 기록(커밋)하는 명령어
- `git commit` 
- `git commit -m "커밋 메시지"` : 커밋 메시지와 함께 커밋 

## 현재 파일 상태를 출력하는 명령어 
`git status`


### Git Graph 확장 프로그램
- `git log` 명령어 처럼 커밋 이력을 시작화해서 보여주는 확장ㅎ 프로그램

1. 확장 프로그램 검색 창에 `Git Graph` 검색 
![Git Graph](https://www.notion.so/image/https%3A%2F%2Fwww.dropbox.com%2Fscl%2Ffi%2F205d8hwmo6hrlymseo9zn%2FCode_XO9YFUcr8m.png%3Frlkey%3D8l5fobpa7mu10byjisbp0luaz%26dl%3D1%26spaceId%3Df2678325-6f7b-4a25-b188-86c42030d6d5?table=block&id=269611ac-3a00-8063-83ec-e952697d62d9&cache=v2) 

2. Changes 작업 공간으로 이동 후, 옆에 생긴 Source Control 메뉴 열기! 
![Git Graph 위치](https://www.notion.so/image/https%3A%2F%2Fwww.dropbox.com%2Fscl%2Ffi%2F46voti4sp8l9fihg1pnx5%2FCode_UlZESqyVz1.png%3Frlkey%3D46kx3mmbo9ophn2lhefz4a79l%26dl%3D1%26spaceId%3Df2678325-6f7b-4a25-b188-86c42030d6d5?table=block&id=269611ac-3a00-80e3-a68d-f6f351fcce74&cache=v2)