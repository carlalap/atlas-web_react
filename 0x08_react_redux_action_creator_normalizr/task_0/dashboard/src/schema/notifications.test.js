/* Notifications.test.js file
*  Testing File 
 */
import getAllNotificationsByUser from "./notifications";


describe("getAllNotificationsByUser", () => {
    // test that uses the id 5debd764a7c57c7839d722e9 and verifies that the following data is returned
    it("returns the correct context for the user 5debd764a7c57c7839d722e9", () => {
  
    // mock data for testing returned data
    const userId = "5debd764a7c57c7839d722e9"; // Author Id
    const expectedNotifications = [
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
      },
    ];
  
    // grab specific data array - context object only
    const result = getAllNotificationsByUser(userId).map(({ context }) => context);
    expectedNotifications.forEach((expectedNotification) => {
      expect(result).toContainEqual(
        expect.objectContaining(expectedNotification));
      })
    });
  });