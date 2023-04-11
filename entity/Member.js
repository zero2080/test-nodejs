class Member {
    constructor(member) {
        this.id = member?.id ?? null;
        this.login_id = member?.login_id ?? null;
        this.password = member?.password ?? null;
        this.created_at = member?.created_at ?? null;
    }
}

module.exports = Member;