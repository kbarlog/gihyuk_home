const SENTENCE_DATA = [
    {
        eng: 'I study English.',
        kor: '나는 (평소) 영어 공부를 해.',
        category: '1초영작_시제',
    },
    {
        eng: "I'm studying English now.",
        kor: "나는 지금 영어 공부를 하고 있어.",
        category: '1초영작_시제',
    },
    {
        eng: "I studied English.",
        kor: "나는 영어 공부를 했어.",
        category: "1초영작_시제",
    },
    {
        eng: "I'm gonna study English tommorrow.",
        kor: "나는 내일 영어 공부를 할 거야.",
        category: "1초영작_시제",
    },
    {
        eng: "She studies English.",
        kor: "그녀는 (평소) 영어 공부를 해.",
        category: "1초영작_시제",
    },
    {
        eng: "I have studied English for three years.",
        kor: "나는 3년 동안 영어 공부를 해 왔어.",
        category: "1초영작_시제",
    },
    {
        eng: "I have never studied English.",
        kor: "나는 영어 공부를 한 적이 없어.",
        category: "1초영작_시제",
    },
    {
        eng: "I'm not gonna study English tomorrow.",
        kor: "나는 내일 영어 공부를 안 할 거야.",
        category: "1초영작_시제",
    },
    {
        eng: "I didn't study English yesterday.",
        kor: "나는 어제 영어 공부를 안 했어.",
        category: "1초영작_시제",
    },
    {
        eng: "I don't study English.",
        kor: "나는 (평소) 영어 공부를 안 해.",
        category: "1초영작_시제",
    },
    {
        eng: "Do you study English?",
        kor: "너 (평소) 영어 공부 하니?",
        category: "1초영작_시제",
    },
    {
        eng: "Are you studying English now?",
        kor: "너 지금 영어 공부 하고 있어?",
        category: "1초영작_시제",
    },
    {
        eng: "Did you study English?",
        kor: "너 영어 공부 했니?",
        category: "1초영작_시제",
    },
    {
        eng: "Are you gonna study English tomorrow?",
        kor: "너 내일 영어 공부 할 거야?",
        category: "1초영작_시제",
    },
    {
        eng: "Does she study English?",
        kor: "그녀는 (평소) 영어 공부를 해?",
        category: "1초영작_시제",
    },
    {
        eng: "Have you ever studied English?",
        kor: "너 영어 공부 한 적 있어?",
        category: "1초영작_시제",
    },
    {
        eng: "Do you speak English?",
        kor: "너 영어 할 줄 알아?",
        category: "1초영작_시제",
    },
    {
        eng: "Is he speaking English?",
        kor: "그는 영어를 하고 있는거야?",
        category: "1초영작_시제",
    },
    {
        eng: "Did she work yesterday?",
        kor: "그녀는 어제 일 했어?",
        category: "1초영작_시제",
    },
    {
        eng: "Are you gonna work tomorrow?",
        kor: "너는 내일 일 할거야?>",
        category: "1초영작_시제",
    },
    {
        eng: "I don't watch TV.",
        kor: "나는 TV를 안 봐.",
        category: "1초영작_시제",
    },
    {
        eng: "I work in Seoul.",
        kor: "나는 서울에서 일해.",
        category: "1초영작_시제",
    },
    {
        eng: "Do you like coffee?",
        kor: "너는 커피를 좋아해?",
        category: "1초영작_시제",
    },
    {
        eng: "I'm having dinner.",
        kor: "나는 저녁 식사를 하고 있어.",
        category: "1초영작_시제",
    },
    {
        eng: "He is working.",
        kor: "그는 일하고 있어.",
        category: "1초영작_시제",
    },
    {
        eng: "I went shopping yesterday.",
        kor: "나는 어제 쇼핑하러 갔어.",
        category: "1초영작_시제",
    },
    {
        eng: "I didn't know that.",
        kor: "나는 그건 몰랐어.",
        category: "1초영작_시제",
    },
    {
        eng: "I'm gonna see a friend of mine tomorrow.",
        kor: "나는 내일 내 친구를 만날 거야.",
        category: "1초영작_시제",
    },
    {
        eng: "I'm not gonna go drinking tonight.",
        kor: "나는 오늘 밤에 마시러 안 갈 거야.",
        category: "1초영작_시제",
    },
    {
        eng: "Are you gonna go?",
        kor: "너는 갈 거야?",
        category: "1초영작_시제",
    },
    {
        eng: "Where do you study English?",
        kor: "너 어디서 영어 공부 해?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "When do you study English?",
        kor: "너 언제 영어 공부 해?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "Who do you study English with?",
        kor: "너 누구랑 영어 공부 해?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "Who is studying English?",
        kor: "누가 영어 공부를 하고 있어?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "What are you studying?",
        kor: "너 뭐 공부하니?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "Why do you study English?",
        kor: "너 왜 영어 공부해?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "How did you study English?",
        kor: "너 어떻게 영어 공부했어?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "What time did you finish studying English?",
        kor: "너 몇 시에 영어 공부 끝났어?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "Where are you gonna study English tomorrow?",
        kor: "너 내일 어디서 영어 공부 할 거야?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "Where are you studying English?",
        kor: "너 어디서 영어 공부 하고 있니?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "Where do you wanna go?",
        kor: "너 어디 가고 싶어?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "What do you do?",
        kor: "당신은 무슨 일을 하시나요?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "What time are you gonna finish work tomorrow?",
        kor: "너 내일 몇 시에 일 끝나?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "What are you talking about?",
        kor: "너 무슨 말 하는 거니?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "Where did you go?",
        kor: "너 어디에 갔었니?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "When are you gonna get home?",
        kor: "너 언제 집에 올 거야?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "Who are you gonna go out with?",
        kor: "너 누구랑 데이트할 거야?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "What are you doing?",
        kor: "너 뭐 하고 있니?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "Where did you see her?",
        kor: "너 어디서 그녀를 봤어?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "What did you do on the weekend?",
        kor: "너 주말에 뭐 했어?",
        category: "1초영작_의문사의문문",
    },
    {
        eng: "How old are you?",
        kor: "너 몇 살이야?",
        category: "1초영작_How형용사부사",
    },
    {
        eng: "How tall are you?",
        kor: "너 키가 어떻게 돼?",
        category: "1초영작_How형용사부사",
    },
    {
        eng: "How hungry are you?",
        kor: "너 얼마나 배 고파?",
        category: "1초영작_How형용사부사",
    },
    {
        eng: "How much is it?",
        kor: "이건 얼마에요?",
        category: "1초영작_How형용사부사",
    },
    {
        eng: "How much do you like her?",
        kor: "너 얼마나 그녀를 좋아해?",
        category: "1초영작_How형용사부사",
    },
    {
        eng: "How fast can you run?",
        kor: "너 얼마나 빨리 달릴 수 있어?",
        category: "1초영작_How형용사부사",
    },
    {
        eng: "How spicy is that food?",
        kor: "그 음식 얼마나 매워?",
        category: "1초영작_How형용사부사",
    },
    {
        eng: "How hard is the TOEIC?",
        kor: "토익은 얼마나 어려워?",
        category: "1초영작_How형용사부사",
    },
    {
        eng: "How long have you studied English?",
        kor: "너는 얼마나 오래 영어 공부 했었니?",
        category: "1초영작_How형용사부사",
    },
    {
        eng: "How often do you eat out?",
        kor: "너 얼마나 자주 외식하니?",
        category: "1초영작_How형용사부사",
    },
    {
        eng: "I can speak English.",
        kor: "나는 영어를 할 수 있어.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I have to speak English at a job interview.",
        kor: "나는 면접에서 영어를 해야 해.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I wanna study English.",
        kor: "나는 영어 공부를 하고 싶어.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I wanted to study English.",
        kor: "나는 영어 공부를 하고 싶었어.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I was gonna study English, but I was busy.",
        kor: "나는 영어 공부를 하려고 했는데 바빴어.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "You should study English every day.",
        kor: "너는 매일 영어 공부를 해야 해.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I should have studied English.",
        kor: "나는 영어 공부를 했어야 했는데.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "You could study English if you go to America.",
        kor: "너는 미국에 가면 영어 공부를 할 수 있어.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I could have studied English if I had had more time.",
        kor: "나는 시간이 더 있었으면 영어 공부를 할 수 있었는데.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I would speak English (if I were you).",
        kor: "(내가 너라면) 나는 영어로 말하겠어.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "You can watch TV.",
        kor: "너는 TV를 봐도 돼.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I have to finish my homework by 9 p.m.",
        kor: "나는 밤 9시까지 내 숙제를 끝내야 해.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I wanna see a movie with her.",
        kor: "나는 그녀와 영화를 보고 싶어.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I wanted to go home.",
        kor: "나는 집에 가고 싶었어.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I was gonna go to America, but I had to cancel.",
        kor: "나는 미국에 가려고 했는데 취소해야 했어.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "You should go to bed early.",
        kor: "너는 일찍 자야 해.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "You should have come.",
        kor: "너는 왔어야 했는데.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "You could go to the beach if you have a car.",
        kor: "너는 차가 있으면 바다에 갈 수 있어.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I could have helped you.",
        kor: "내가 너를 도와줄 수 있었는데.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "I don't have to work tomorrow.",
        kor: "나는 내일 일을 안 해도 돼.",
        category: "1초영작_조동사와기타",
    },
    {
        eng: "Can I cook dinner?",
        kor: "내가 저녁밥을 할까?",
        category: "1초영작_부탁과제안",
    },
    {
        eng: "Can you cook dinner?",
        kor: "네가 저녁밥을 좀 할래?",
        category: "1초영작_부탁과제안",
    },
    {
        eng: "Can I help you?",
        kor: "내가 도와줄까?",
        category: "1초영작_부탁과제안",
    },
    {
        eng: "Can you help me?",
        kor: "네가 나 좀 도와줄래?",
        category: "1초영작_부탁과제안",
    },
    {
        eng: "Can I send you the photo?",
        kor: "내가 너한테 그 사진 보내 줄까?",
        category: "1초영작_부탁과제안",
    },
    {
        eng: "Can you send me the photo?",
        kor: "네가 나한테 그 사진 좀 보내 줄래?",
        category: "1초영작_부탁과제안",
    },
    {
        eng: "Can I not go?",
        kor: "나는 안 가도 돼?",
        category: "1초영작_부탁과제안",
    },
    {
        eng: "Can you not go?",
        kor: "너는 가지 말아 줄래?",
        category: "1초영작_부탁과제안",
    },
    {
        eng: "Can I have coffee?",
        kor: "나는 커피 마셔도 돼?",
        category: "1초영작_부탁과제안",
    },
    {
        eng: "Can you call me back?",
        kor: "네가 나한테 다시 전화해 줄래?",
        category: "1초영작_부탁과제안",
    },
    {
        eng: "You look young.",
        kor: "너는 젊어 보여.",
        category: "1초영작_오감동사",
    },
    {
        eng: "She sounds nice.",
        kor: "(듣기에) 그녀는 좋은 사람 같아.",
        category: "1초영작_오감동사",
    },
    {
        eng: "The cheese smells bad.",
        kor: "그 치즈는 냄새가 이상해.",
        category: "1초영작_오감동사",
    },
    {
        eng: "This coffee tastes strange.",
        kor: "이 커피는 맛이 이상해.",
        category: "1초영작_오감동사",
    },
    {
        eng: "I feel great.",
        kor: "나는 기분이 최고야.",
        category: "1초영작_오감동사",
    },
    {
        eng: "You look tired.",
        kor: "너는 피곤해 보여.",
        category: "1초영작_오감동사",
    },
    {
        eng: "That sounds hard.",
        kor: "(듣기에) 그건 힘들 것 같아.",
        category: "1초영작_오감동사",
    },
    {
        eng: "They look happy.",
        kor: "그들은 행복해 보여.",
        category: "1초영작_오감동사",
    },
    {
        eng: "The music makes me happy.",
        kor: "그 음악은 나를 행복하게 해.",
        category: "1초영작_오감동사",
    },
    {
        eng: "The country made me exited.",
        kor: "그 나라는 나를 흥분시켰어.",
        category: "1초영작_오감동사",
    },
    {
        eng: "There's nothing to tell!",
        kor: "애기할것도 없어!",
        category: "미드_프렌즈",
    },
]

export { SENTENCE_DATA };