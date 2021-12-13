import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from "sequelize-typescript";

export interface UserType {
    id?: number | null;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

@Table({
    tableName: "user",
    timestamps: true
})

class User extends Model implements UserType {

    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @NotEmpty
    @Column
    firstName!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    lastName!: string;

    @AllowNull(true)
    @Column
    email!: string;

    @AllowNull(true)
    @Column
    password!: string;

}

export default User;