fetch("https://dummyjson.com/comments")
  .then((res) => res.json())
  .then((data) => {
    const comments = data["comments"];
    console.log(comments);
    newComments = comments.map((element) => {
      // 구조 분해 할당 활용
      // id, body 속성만 변수에 저장
      const { id, body } = element;

      // 단축 프로퍼티 활용
      return { id, body };
    });
    console.log(newComments);
  });

// 배열 구조 분해 할당
const array = [1, 2, 3, 4, 5];
