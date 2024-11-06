const jwt = require('jsonwebtoken');

// Function to authenticate token
function authenticateToken(req, res, next) {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const verified = jwt.verify(token, 'process.env.JWT_SECRET');
        req.user = verified; // Add the user information to the request object
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        res.status(403).json({ message: 'Invalid token.' });
    }
}

module.exports = authenticateToken;