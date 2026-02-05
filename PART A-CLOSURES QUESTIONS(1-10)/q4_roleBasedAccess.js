function createUser(role) {
    return function (requiredRole) {
        return role === requiredRole;
    };
}

const adminUser = createUser("admin");
console.log(adminUser("admin"));
