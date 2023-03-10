const customFetch = async (url, { body, ...customConfig }) => {
    const headers = {
        "content-type": "application/json; charset=UTF-8",
    };
    // config contains the header 
    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };


    if (body) {
        //converting the body to json
        config.body = JSON.stringify(body);

    }

    try {
        //this call fetch the url and convert into json
        const response = await fetch(url, config);
        const data = await response.json();

        if (response.success || response.ok) {
            return {
                data: data,
                success: true,
            };
        }
        throw new Error(data.message);

    } catch (error) {
        // console.error("error");
        return {
            message: error.message,
            success: false,
        }
    }
};
export default customFetch;
