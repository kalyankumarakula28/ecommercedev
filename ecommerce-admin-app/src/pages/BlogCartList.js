import React from 'react';
import {Table} from "antd";


const BlogCartList = () => {
    const columns = [
        {
          title: "Sno",
          dataIndex: "key",
        },
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Product",
          dataIndex: "product",
        },
        {
          title: "Status",
          dataIndex: "status",
        },
      ];
      const data1 = [];
      for (let i = 0; i < 46; i++) {
        data1.push({
          key: i,
          name: `Edward King ${i}`,
          product: 32,
          status: `London, Park Lane no. ${i}`,
        });
      }
  return (
    <div>
      <h3 className="mb-4 title">Blogs Catogery List</h3>
      <div>
        <Table columns={columns} dataSource={data1}/>
      </div>
    </div>
  )
}

export default BlogCartList