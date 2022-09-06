import { Card, Avatar, Rate, Button } from "antd";
const { Meta } = Card;

const CardList = [4, 3, 2, 1];

const CardItem = CardList.map((item, i) => (
  <Card
    key={i}
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://cdn.pixabay.com/photo/2018/02/22/18/21/laptop-3173613_960_720.png"
      />
    }
    actions={[<Rate allowHalf defaultValue={item}></Rate>]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v2/random" />}
      title="Articles title"
      description="This is the description"
    />
  </Card>
));

const Articles = () => {
  return (
    <div className="articles-container">
      <h1 className="h1-title">Featured Articles</h1>
      <div className="card-list">{CardItem}</div>
      <div className="btn">
        <Button size="large" type="primary" danger>
          See all Articles
        </Button>
      </div>
    </div>
  );
};

export default Articles;
