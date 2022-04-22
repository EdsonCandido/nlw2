import knex, {Knex} from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('password').nullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();

        table.boolean('active').defaultTo(true);

        table.timestamps(true, true);
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}