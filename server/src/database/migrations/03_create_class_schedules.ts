import knex, {Knex} from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        table.boolean('active').defaultTo(true);

        table.timestamps(true, true);
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}