import { useCallback, useEffect, useState } from 'react'

interface ResponseType {
    "id": number,
    "login": string,
    "node_id": string,
    "avatar_url": string,
    "gravatar_id": string,
    "url": string,
    "html_url": string,
    "followers_url": string,
    "following_url": string,
    "gists_url": string,
    "starred_url": string,
    "subscriptions_url": string,
    "organizations_url": string,
    "repos_url": string,
    "events_url": string,
    "received_events_url": string,
    "type": string,
    "site_admin": boolean
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