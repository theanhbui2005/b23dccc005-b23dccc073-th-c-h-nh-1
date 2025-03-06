import type { IColumn } from '@/components/Table/typing';
import { Button, Modal, Table } from 'antd';
import { useEffect } from 'react';
import { useModel } from 'umi';
import FormQuanLiMonHoc from './Form';

const QuanLyMonHoc = () => {
    const { data, getMonHoc, setRow, isEdit, setVisible, setIsEdit, visible } = useModel('quanlymonhoc');

    useEffect(() => {
        getMonHoc();
    }, []);

    const columns: IColumn<quanlymonhoc.Record>[] = [
        {
            title: 'Mã câu hỏi',
            dataIndex: 'code',
            key: 'code',
            width: 200,
        },
        {
            title: 'Môn học',
            dataIndex: 'subject',
            key: 'subject',
            width: 200,
        },
        {
            title: 'Nội dung câu hỏi',
            dataIndex: 'content',
            key: 'content',
            width: 300,
        },
        {
            title: 'Mức độ khó',
            dataIndex: 'difficulty',
            key: 'difficulty',
            width: 150,
        },
        {
            title: 'Khối kiến thức',
            dataIndex: 'knowledgeBlock',
            key: 'knowledgeBlock',
            width: 200,
        },
        {
            title: 'Action',
            width: 200,
            align: 'center',
            render: (record) => {
                return (
                    <div>
                        <Button
                            onClick={() => {
                                setVisible(true);
                                setRow(record);
                                setIsEdit(true);
                            }}
                        >
                            Edit
                        </Button>
                        <Button
                            style={{ marginLeft: 10 }}
                            onClick={() => {
                                const dataLocal: any = JSON.parse(localStorage.getItem('data') as any);
                                const newData = dataLocal.filter((item: any) => item.code !== record.code);
                                localStorage.setItem('data', JSON.stringify(newData));
                                getMonHoc();
                            }}
                            type='primary'
                        >
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <div>
            <Button
                type='primary'
                onClick={() => {
                    setVisible(true);
                    setIsEdit(false);
                }}
            >
                Add Question
            </Button>

            <Table dataSource={data} columns={columns} />

            <Modal
                destroyOnClose
                footer={false}
                title={isEdit ? 'Edit Question' : 'Add Question'}
                visible={visible}
                onOk={() => {}}
                onCancel={() => {
                    setVisible(false);
                }}
            >
                <FormQuanLiMonHoc />
            </Modal>
        </div>
    );
};

export default QuanLyMonHoc;
