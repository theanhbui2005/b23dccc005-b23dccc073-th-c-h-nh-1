import { Button, Form, Input, Select } from 'antd';
import { useModel } from 'umi';

const { Option } = Select;

const subjects = ["Math", "Physics", "Chemistry"];
const difficulties = ["Easy", "Medium", "Hard", "Very Hard"];
const knowledgeBlocks = ["Algebra", "Geometry", "Calculus"];

const FormQuanLiMonHoc = () => {
  const { data, getMonHoc, row, isEdit, setVisible } = useModel('quanlymonhoc');

  return (
    <Form
      onFinish={(values) => {
        console.log('🚀 ~ QuanLyMonHoc ~ values:', values);
        const index = data.findIndex((item: any) => item.address === row?.code);
        const dataTemp: quanlymonhoc.Record[] = [...data];
        dataTemp.splice(index, 1, values);
        const dataLocal = isEdit ? dataTemp : [values, ...data];
        localStorage.setItem('data', JSON.stringify(dataLocal));
        setVisible(false);
        getMonHoc();
      }}
    >
      <Form.Item
        initialValue={row?.code}
        label='Mã câu hỏi'
        name='code'
        rules={[{ required: true, message: 'Nhập mã câu hỏi' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={row?.subject}
        label='Môn học'
        name='subject'
        rules={[{ required: true, message: 'Nhập môn học' }]}
      >
        <Select>
          {subjects.map((subject) => (
            <Option key={subject} value={subject}>
              {subject}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        initialValue={row?.difficulty}
        label='Mức độ khó'
        name='difficulty'
        rules={[{ required: true, message: 'Chọn mức độ khó' }]}
      >
        <Select>
          {difficulties.map((difficulty) => (
            <Option key={difficulty} value={difficulty}>
              {difficulty}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        initialValue={row?.knowledgeBlock}
        label='Khối kiến thức'
        name='knowledgeBlock'
        rules={[{ required: true, message: 'Chọn khối kiến thức' }]}
      >
        <Select>
          {knowledgeBlocks.map((block) => (
            <Option key={block} value={block}>
              {block}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        initialValue={row?.content}
        label='Nội dung câu hỏi'
        name='content'
        rules={[{ required: true, message: 'Nhập nội dung câu hỏi' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <div className='form-footer'>
        <Button htmlType='submit' type='primary'>
          {isEdit ? 'Save' : 'Insert'}
        </Button>
        <Button onClick={() => setVisible(false)}>Cancel</Button>
      </div>
    </Form>
  );
};

export default FormQuanLiMonHoc;
