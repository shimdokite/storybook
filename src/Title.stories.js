import Title from "./Title";

export default {
  title: "Practice/Title", // 컴포넌트 이름으로, /를 넣어 카테고리화 할 수 있다
  component: Title, // 어떤 컴포넌트를 가져와서 스토리로 만들건지 명시해준다
  argTypes: {
    // 컴포넌트에 필요한 전달인자의 종류와 타입을 정해준다
    title: { control: "text" }, // title 이라는 전달인자에 text 타입이 필요함을 의미한다
    textColor: { control: "text" }, // textColor 이라는 전달인자에 text 타입이 필요함을 의미한다
  },
};

// 템플릿을 만들어 Title 컴포넌트가 args를 전달받아 props로 내려준다
const Template = (args) => <Title {...args} />;

// storybook 에서 확인하고 싶은 컴포넌트는 export const 로 작성한다
// 템플릿을 사용하여 storybook 에 넣어줄 스토리를 하나 만들어 준 것
// Template.bind({}); 는 정해진 문법(관습?)이라고 생각하고 사용하면 된다
export const RedTilte = Template.bind({});

// 만들어준 스토리의 전달인자를 작성하기
RedTilte.args = {
  title: "Red Title",
  textColor: "red",
};

export const BlueTitle = Template.bind({});

BlueTitle.args = {
  title: "Blue Title",
  textColor: "blue",
};

// 전달인자를 직접 받는 스토리
export const storybookTitle = (args) => {
  return <Title {...args} />;
};
