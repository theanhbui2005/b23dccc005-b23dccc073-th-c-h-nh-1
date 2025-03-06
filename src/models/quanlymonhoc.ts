import { useState } from 'react';

export default () => {
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [row, setRow] = useState<quanlymonhoc.Record>();

    const getMonHoc = async () => {
        const dataLocal: any = JSON.parse(localStorage.getItem('data') as any);
        setData(dataLocal);
    };

    return {
        data,
        visible,
        setVisible,
        row,
        setRow,
        isEdit,
        setIsEdit,
        setData,
        getMonHoc,
    };
};
