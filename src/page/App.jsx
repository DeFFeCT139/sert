import { Card, Row, Col, Input } from "antd";
import axios from "axios";
import '@ant-design/v5-patch-for-react-19';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { Search } = Input;

function App() {

  const [data, setData] = useState([])
  const [resuleData, setResultData] = useState([])

  const fetchPosts = async () => {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setData(data)
    setResultData(data)
  }

  useEffect(()=> {
    fetchPosts()
  },[])

  const onSearch = (value, _e, ) => {
      let newData = resuleData.filter(item=> item.title.includes(value))
      setData(newData)
  }

  return (
    <div className='App'>
      <Search className="serch" allowClear onSearch={onSearch} placeholder="input search text" enterButton />
        <Row gutter={[16, 16]}>
          {data.map(item =>
            <Col xl={6} md={12} key={data.indexOf(item)}>
              <Card extra={<Link to={`/post/${item.id}`}>More</Link>} title={item.title} xl={6} style={{ minWidth: 300, height: '230px' }}>
                {item.body}
              </Card>
            </Col>
          )}
        </Row>
    </div>
  );
}

export default App;
