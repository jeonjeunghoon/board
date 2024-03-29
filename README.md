# 게시판

## 애플리케이션 구조도

[![](https://mermaid.ink/img/pako:eNplkEFKw0AUhq8yvJVCe4EshDbpBdSVTRdDMrXBJhPGCSJNoYqI0CAuLGSRQhdVqyAUKZozJS93MCakRjurmfnf9_3DjMDgJgMF-kN-YQyokORY0x2Sr1a35bo90mwe-IfMtAQzpE_aexjdZNdLknwEOI2y4IFk9yHON_gy2S-5doGUeRJPSHa1SZ_ffaJ2_6BFVKG9ElULNJ0u06f4dwznIcFFlL69Vi613oSfj8l6ks3CJF5vy7SqrEx3mrQaSrgg-LXC26ASl-_AuxAXs3_izlZcpDviTg2ti6EBNhM2tcz8s0c_szrIAbOZDkq-Nak400F3xvkc9SQ_unQMUKTwWAM816SSaRY9FdQGpU-H5_mtS50Tzqvz-Bvb3tby?type=png)](https://mermaid.live/edit#pako:eNplkEFKw0AUhq8yvJVCe4EshDbpBdSVTRdDMrXBJhPGCSJNoYqI0CAuLGSRQhdVqyAUKZozJS93MCakRjurmfnf9_3DjMDgJgMF-kN-YQyokORY0x2Sr1a35bo90mwe-IfMtAQzpE_aexjdZNdLknwEOI2y4IFk9yHON_gy2S-5doGUeRJPSHa1SZ_ffaJ2_6BFVKG9ElULNJ0u06f4dwznIcFFlL69Vi613oSfj8l6ks3CJF5vy7SqrEx3mrQaSrgg-LXC26ASl-_AuxAXs3_izlZcpDviTg2ti6EBNhM2tcz8s0c_szrIAbOZDkq-Nak400F3xvkc9SQ_unQMUKTwWAM816SSaRY9FdQGpU-H5_mtS50Tzqvz-Bvb3tby)

## 배포된 페이지

[📋 애플리케이션](https://jjh-board.vercel.app/wiki)

[📕 스토리북](https://65db1930d5b4b6fd055b1fee-dhwqjtaftt.chromatic.com/)

## 실행 방법

```bash
yarn
yarn dev
```

## TO DO LIST

### 에러 핸들링

- [x] 잘못된 주소로 접근 시 error element로 라우팅

### 게시판 페이지

- [x] 여러 개의 위키페이지 제목들의 리스트 UI가 렌더링된다.
- [x] 위키페이지 제목을 클릭하면 해당 위키페이지로 이동한다.
- [x] 한 번이 보여지는 리스트의 최대 길이는 5개다.
- [x] 리스트의 최대 길이를 초과할 경우 페이지네이션으로 구분된다.
  - [x] 페이지네이션 컴포넌트는 이전/다음 버튼과 페이지 번호를 표시한다.
  - [x] 그룹 이동 페이지네이션 버튼은 total page의 수가 page range 보다 클 때만 렌더링된다.
- [x] 추가 버튼을 클릭하면 새로운 탭에 위키추가페이지가 렌더링된다.
- [x] 위키페이지가 존재하지 않을 경우, "위키가 없습니다" 등의 메시지를 표시한다.

### 게시글 페이지

- [x] 제목과 본문으로 구성된 UI가 렌더링된다.
  - [x] 제목은 텍스트로 구성되어 있다.
  - [x] 본문은 텍스트로 구성되어 있다.
  - [x] 본문에 있는 다른 위키페이지의 제목은 하이퍼링크 형태다.
    - [x] 해당 링크를 클릭하면 해당 위키페이지로 이동한다.
  - [x] 수정 버튼을 클릭하면 해당 위키페이지의 위키수정페이지로 이동한다.
  - [x] 삭제 버튼을 클릭하면 해당 위키가 삭제된다.

### 게시글 추가 페이지

- [x] 제목과 본문에 텍스트를 입력할 수있는 UI가 렌더링된다.
- [x] 제목 입력 창에 텍스트를 입력할 수 있다.
  - [x] 제목 입력은 필수 사항이다.
- [x] 본문 입력 창에 텍스트를 입력할 수 있다.
  - [x] 본문 입력은 필수 사항이다.
- [x] 추가 버튼을 클릭하면 confirm창이 뜬다.
  - [x] confirm의 확인을 클릭하면 위키페이지가 새롭게 추가되고, 새롭게 추가된 페이지로 이동한다.
  - [x] confirm의 취소를 클릭하면 confirm창이 사라진다.
- [x] 취소 버튼을 클릭하면 confirm창이 뜬다.
  - [x] confirm의 확인을 클릭하면 작성 중이던 모든 내용을 삭제하고, 페이지를 벗어난다.
  - [x] confirm의 취소를 클릭하면 confirm창이 사라진다.
- [x] 다른 위키와 중복된 이름의 제목은 사용할 수 없다.
  - [x] 제목 부분에서 blur 될 때 validation 검사를 한다.

### 게시글 수정 페이지

- [x] 이전에 머물던 위키페이지의 제목과 본문을 확인할 수 있다.
- [x] 첫 진입 시, 본문에 포커싱된다.
- [x] 본문을 수정할 수 있다.
- [x] 수정 버튼을 클릭하면 confirm창이 뜬다.
  - [x] confirm의 확인을 클릭하면 해당 위키페이지가 수정되고, 수정된 페이지로 이동한다.
  - [x] confirm의 취소를 클릭하면 confirm창이 사라진다.
- [x] 취소 버튼을 클릭하면 confirm창이 뜬다.
  - [x] confirm의 확인을 클릭하면 수정 중이던 모든 내용을 삭제하고, 페이지를 벗어난다.
  - [x] confirm의 취소를 클릭하면 confirm창이 사라진다.

## TEST

### 게시판 페이지

- [x] '위키 게시판' h1 타이틀이 렌더링된다.
- [x] 게시판이 렌더링된다.
- [x] 화면에 0-5개 사이의 게시물이 렌더링된다.
- [x] 게시글은 저장된 순서에 맞게 렌더링된다
- [x] 게시글을 클릭하면 해당 게시글의 id를 포함한 라우트 주소로 이동한다
- [x] 페이지네이션이 렌더링된다.
- [x] 게시물이 6개 이상이면 다른 페이지 숫자와, 페이지 이동 버튼이 렌더링된다.
- [x] 게시물이 51개 이상이면 그룹 페이지네이션 버튼이 렌더링된다.
- [x] 페이지 숫자 버튼을 클릭하면 해당 페이지의 게시물이 렌더링된다.
- [x] 이전 페이지 이동 버튼을 클릭하면 이전페이지의 게시물이 렌더링된다
- [x] 다음 페이지 이동 버튼을 클릭하면 다음페이지의 게시물이 렌더링된다
- [x] 다음 그룹 페이지 이동 버튼을 클릭하면 다음 그룹 페이지의 첫 번째 페이지로 이동한다
- [x] 이전 그룹 페이지 이동 버튼을 클릭하면 이전 그룹 페이지의 첫 번째 페이지로 이동한다
- [x] 추가하기 버튼이 보여야 한다

### 게시글 페이지

- [x] 제목 텍스트가 렌더링된다.
- [x] 본문 텍스트가 렌더링된다.
- [x] 다른 위키의 제목과 동일한 내용은 하이퍼링크로 렌더링된다.
- [x] 수정하기 버튼이 렌더링된다.
- [x] 삭제하기 버튼이 렌더링된다.
- [x] 삭제하기 버튼을 클릭하면 confirm이 렌더링된다.

### 게시글 추가 페이지

- [x] 게시글의 제목 입력창과 본문 입력창이 렌더링된다.
- [x] 돌아가기 링크가 렌더링된다.
- [x] 추가하기, 취소하기 버튼이 렌더링된다.
- [x] 추가하기 버튼은 비활성화되어 있다.
- [x] 제목과 본문에 텍스트가 입력되면, 추가하기 버튼은 활성화된다.

### 게시글 수정 페이지

- [x] 게시글의 제목 입력창과 본문 입력창이 렌더링된다.
- [x] 수정하기, 취소하기 버튼이 렌더링된다.
- [x] 제목과 본문에 텍스트가 없다면, 추가하기 버튼은 비활성화된다.
