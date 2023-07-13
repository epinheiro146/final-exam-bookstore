import { Query } from "..";
import { User, MysqlResponse } from "../../../types";

const find = (column: string, value: string) => Query<User[]>(
    `SELECT *
    FROM users
    WHERE ?? = ?`, [column, value]
);

const insert = (newUser: { name: string, email: string, password: string }) => Query<MysqlResponse>(
    `INSERT INTO users
    SET ?`, [newUser]
);

export default {
    find,
    insert
};