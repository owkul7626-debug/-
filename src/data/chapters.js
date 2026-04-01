export const chapters = [
  {
    id: "chapter-1",
    title: "1. C언어의 시작",
    summary: "C언어의 소개와 개발 환경 구축, 그리고 첫 번째 프로그램을 만들어 봅니다.",
    content: "## C언어란 무엇인가?\n\nC언어는 시스템 프로그래밍과 애플리케이션 개발에 널리 사용되는 강력하고 효율적인 프로그래밍 언어입니다.\n\n### Hello World 프로그램\n```c\n#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}\n```\n첫 단추를 잘 꿰어봅시다!"
  },
  {
    id: "chapter-2",
    title: "2. 변수와 자료형",
    summary: "데이터를 저장하는 방법인 변수와 다양한 자료형에 대해 알아봅니다.",
    content: "## 변수(Variables)\n\n프로그램에서 데이터를 담아두는 상자와 같습니다. C언어에서는 변수를 사용하기 전에 항상 선언해주어야 합니다.\n\n### 자주 사용되는 자료형\n- `int`: 정수\n- `float`, `double`: 실수\n- `char`: 단일 문자\n\n```c\nint age = 20;\nfloat height = 175.5;\nchar grade = 'A';\n```"
  },
  {
    id: "chapter-3",
    title: "3. 표준 입출력",
    summary: "사용자와 프로그램 간의 데이터를 주고받는 기초적인 방법을 익힙니다.",
    content: "## printf와 scanf\n\n- `printf`: 콘솔 화면에 텍스트를 출력합니다.\n- `scanf`: 키보드로부터 사용자의 입력을 받습니다.\n\n```c\nint number;\nprintf(\"숫자를 입력하세요: \");\nscanf(\"%d\", &number);\nprintf(\"입력한 숫자는 %d입니다.\\n\", number);\n```"
  },
  {
    id: "chapter-4",
    title: "4. 조건문과 제어문",
    summary: "프로그램의 흐름을 제어하는 if문과 switch문에 대해 학습합니다.",
    content: "## if-else 문\n\n주어진 조건에 따라 실행할 코드를 분기할 때 사용합니다.\n\n```c\nint score = 85;\nif (score >= 90) {\n    printf(\"A 등급입니다.\\n\");\n} else if (score >= 80) {\n    printf(\"B 등급입니다.\\n\");\n} else {\n    printf(\"C 등급 이하입니다.\\n\");\n}\n```"
  },
  {
    id: "chapter-5",
    title: "5. 반복문 (for, while)",
    summary: "동일한 작업을 여러 번 반복할 때 사용하는 반복문을 다룹니다.",
    content: "## for 반복문\n\n가장 많이 사용되는 반복 형태입니다.\n\n```c\nfor (int i = 0; i < 5; i++) {\n    printf(\"현재 카운트: %d\\n\", i);\n}\n```\n\n반복문을 잘 활용하면 길고 지루한 코드 입력을 대폭 줄일 수 있습니다."
  },
  {
    id: "chapter-6",
    title: "6. 함수 (Functions)",
    summary: "코드를 모듈화하여 재사용성을 높이는 함수의 개념과 활용법",
    content: "## 함수의 기본\n\n함수는 하나의 특별한 목적을 수행하기 위해 독립적으로 설계된 코드의 집합입니다.\n\n```c\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(3, 4);\n    printf(\"결과: %d\\n\", result);\n    return 0;\n}\n```"
  },
  {
    id: "chapter-7",
    title: "7. 배열과 포인터",
    summary: "여러 데이터를 순차적으로 관리하는 배열과 C언어의 꽃, 포인터를 배웁니다.",
    content: "## 포인터의 두려움을 극복하자\n\n포인터는 메모리 주소를 저장하는 변수입니다.\n\n```c\nint num = 10;\nint *ptr = &num;\nprintf(\"num의 값: %d\\n\", *ptr);\n```\n포인터를 이해하면 C언어의 절반을 이해한 것과 다름없습니다."
  }
];
