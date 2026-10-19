

async function registerUser(req, res) {
    try {
        console.log("Request body:", req.body);

        const { username, email, password } = req.body || {};

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Username, email, and password are required"
            });
        }

        // Add your user registration logic here

        return res.status(201).json({
            message: "Request received successfully"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export { registerUser };
