import $api from "../http";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', { email, password });
    }

    static async registration(email, inn, password, confirmPassword) {
        return $api.post('/registration', {
            email,
            inn,
            password,
            confirmPassword
        });
    }

    static async logout() {
        return $api.post('/logout');
    }
}
