import { useCallback, useEffect, useState } from 'react'

interface ResponseType {
    id: number,
    login: string,
    html_url: string,
    // Index Signatures
    [key: string]: string | number,
}

const useFetchData = (apiEndPoint: string) => {
    
    const [data, setData] = useState<ResponseType[]>([]);

    const letsGetData = useCallback(async (): Promise<void> => {
        const response = await fetch(apiEndPoint, {method : 'GET'});
        const resData: ResponseType[] = await response.json();
        setData(resData);
    }, [apiEndPoint]);

    useEffect(() => {
        letsGetData()
    }, [letsGetData]);

    return data;
}

export default useFetchData