# Wiki

## 기능 요구 사항

- 위키페이지는 제목과 본문으로 구성되며 각각 텍스트 입니다.
- 처음페이지에서는 여러개의 위키페이지제목이 목록으로 나옵니다.
- 처음페이지에 목록으로 보여지는 제목의 갯수는 5개이며, 5개가 넘어가면 페이지를 구분해서 표시합니다.
- 위키페이지 제목을 클릭하면 제목과 본문을 볼 수 있습니다.
- 위키페이지 본문에 다른 위키페이지의 제목이 있으면 자동으로 링크가 걸리고,클릭하면 해당 위키페이지로 이동합니다.
- 메인페이지에서 추가 버튼을 누르면 새로이 입력할 수 있는 창이 나오고, 제목과 내용을 입력할 수 있습니다.
- 위키내용페이지에는 수정 버튼이 있고, 수정을 누르면 내용을 수정해서 저장할 수 있습니다.

## TO DO LIST

### 메인페이지(처음,게시판페이지)

- [x] 여러 개의 위키페이지 제목들의 리스트 UI가 렌더링된다.
- [x] 위키페이지 제목을 클릭하면 해당 위키페이지로 이동한다.
- [ ] 한 번이 보여지는 리스트의 최대 길이는 5개다.
- [ ] 리스트의 최대 길이를 초과할 경우 페이지네이션으로 구분된다.
  - [ ] 페이지네이션 컴포넌트는 이전/다음 버튼과 페이지 번호를 표시한다.
- [x] 추가 버튼을 클릭하면 새로운 탭에 위키추가페이지가 렌더링된다.
- [x] 위키페이지가 존재하지 않을 경우, "위키가 없습니다" 등의 메시지를 표시한다.

### 위키페이지

- [x] 제목과 본문으로 구성된 UI가 렌더링된다.
  - [x] 제목은 텍스트로 구성되어 있다.
  - [x] 본문은 텍스트로 구성되어 있다.
  - [ ] 본문에 있는 다른 위키페이지의 제목은 하이퍼링크 형태다.
    - [ ] 해당 링크를 클릭하면 해당 위키페이지로 이동한다.
  - [ ] 수정 버튼을 클릭하면 해당 위키페이지의 위키수정페이지로 이동한다.

### 위키추가페이지

- [x] 제목과 본문에 텍스트를 입력할 수있는 UI가 렌더링된다.
- [x] 제목 입력 창에 텍스트를 입력할 수 있다.
  - [x] 제목 입력은 필수 사항이다.
- [x] 본문 입력 창에 텍스트를 입력할 수 있다.
  - [x] 본문 입력은 필수 사항이다.
- [x] 추가 버튼을 클릭하면 confirm창이 뜬다.
  - [x] confirm의 확인을 클릭하면 위키페이지가 새롭게 추가되고, 페이지를 벗어난다.
  - [x] confirm의 취소를 클릭하면 confirm창이 사라진다.
- [x] 취소 버튼을 클릭하면 confirm창이 뜬다.
  - [x] confirm의 확인을 클릭하면 작성 중이던 모든 내용을 삭제하고, 페이지를 벗어난다.
  - [x] confirm의 취소를 클릭하면 confirm창이 사라진다.
- [x] 다른 위키와 중복된 이름의 제목은 사용할 수 없다.

### 위키수정페이지

- [x] 이전에 머물던 위키페이지의 제목과 본문을 확인할 수 있다.
- [x] 본문을 수정할 수 있다.
- [x] 수정 버튼을 클릭하면 confirm창이 뜬다.
  - [x] confirm의 확인을 클릭하면 해당 위키페이지가 수정된다.
  - [x] confirm의 취소를 클릭하면 confirm창이 사라진다.
- [x] 취소 버튼을 클릭하면 confirm창이 뜬다.
  - [x] confirm의 확인을 클릭하면 수정 중이던 모든 내용을 삭제하고, 페이지를 벗어난다.
  - [x] confirm의 취소를 클릭하면 confirm창이 사라진다.
