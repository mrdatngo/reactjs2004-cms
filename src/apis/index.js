const apis = {
    login: (data) => {
        // fake api
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: {
                        username: data.username,
                        success: true,
                        token: "this is fake token",
                    }
                });
            }, 1000);
        });
    },
};

export default apis;
