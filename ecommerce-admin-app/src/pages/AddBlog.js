import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded Successfully`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AddBlog = () => {
  const [desc, setDesc] = useState("");
  const handleDesc = (e) => {
    setDesc(e);
  };

  return (
    <div className="title mb-4">
      <div className="mb-4">
        <form action="">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.Strictly prohibited from
              uploading company data or other band files
            </p>
          </Dragger>
          <div className="mt-3">  <CustomInput type="text" label="Enter Blog Title" /></div>
        
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(e) => {
              handleDesc(e);
            }}
          />
          <button
            className="btn btn-success border-0 rounded-3 my-3"
            type="submit"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;

/*
import RichTextEditor from "react-rte";


state = {
    value: RichTextEditor.createEmptyValue(),
  };
  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(value.toString("html"));
    }
  };
  
              <RichTextEditor value={this.state.value} onChange={this.onChange} />

  */
