# List of Contacts
The contact can belong to many categories:
-> categories String (prisma syntax)

# List of Contacts by category
One contact can be to belong a many categories and one category can to be long a many contacts.
The intermediate table will have two strangers keys, ex: 
"id_contact" and "id_category"


# Tasks
[x] Create table contacts
[x] Create Contatos and Categorias relationship
[x] Presentation: Controller for Load Contacts by categories 
[x] Try create types of Entities in your domain
[ ] Make route for DB refresh


# Backlog
[ ] Test .csv import in DBeaver