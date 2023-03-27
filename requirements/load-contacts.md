# List of Contacts
The contact can belong to many categories:
-> categories String (prisma syntax)

# List of Contacts by category
One contact can be to belong a many categories and one category can to be long a many contacts.
The intermediate table will have two strangers keys, ex: 
"id_contact" and "id_category"


- Create table contacts
- Load Contacts by categories