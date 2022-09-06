import { Card, Avatar, Rate, Button } from "antd";
const { Meta } = Card;

const CardList = [1, 2, 3, 4];

const CardItem = CardList.map((item, i) => (
  <Card
    key={i}
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"
      />
    }
    actions={[<Rate allowHalf defaultValue={item}></Rate>]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Tutorials title"
      description="This is the description"
    />
  </Card>
));

const Tutorials = () => {
  return (
    <div className="tutorials-container">
      <h1 className="h1-title">Featured Tutorials</h1>
      <div className="card-list">{CardItem}</div>
      <div className="btn">
        <Button size="large" type="primary" danger>
          See all Articles
        </Button>
      </div>
    </div>
  );
};

export default Tutorials;
