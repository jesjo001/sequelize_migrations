'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
       'user',
       [
         {
           id: 1,
           name: 'John Doe',
           email: 'user1@test.com',
           created_at: new Date(),
           updated_at: new Date(),
         },
         {
           id: 2,
           name: 'John Doe 2',
           email: 'user2@test.com',
           created_at: new Date(),
           updated_at: new Date(),
         },
         {
           id: 3,
           name: 'John Doe 3',
           email: 'user3@test.com',
           created_at: new Date(),
           updated_at: new Date(),
         }
     ], {});

       await queryInterface.bulkInsert(
      'channels',
      [
        {
          id: 1,
          name: 'channel1',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'channel2',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

  await queryInterface.bulkInsert(
      'video',
      [
        {
          id: 1,
          title: 'video1ByUser1',
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: 'video2ByUser1',
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: 'video3ByUser2',
          channel_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('channel', null, bulkDeleteOptions);
     await queryInterface.bulkDelete('video', null, bulkDeleteOptions);
     await queryInterface.bulkDelete('user', null, bulkDeleteOptions);
  }
};
