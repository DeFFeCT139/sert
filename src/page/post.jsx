import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
    const [data, setData] = useState(null)

    const { id } = useParams();

    const fetchPost = async () => {
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setData(data)
    }

    useEffect(() => {
        fetchPost()
    }, [])


    console.log(data)
    return (
        <div className="post">
            {data ?
                <Card
                    title={data.title}
                    style={{
                        maxWidth: 600,
                    }}
                >
                    {data.body}
                </Card> :
                <div className=""></div>
            }
        </div>
    );
}

export default Post;
