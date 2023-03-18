# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "dropping tables"

puts "starting seeds"

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

puts "creating the folder"
Folder.create(
  name: "Landscapes Galore"
)

# folders = Folder.all()

puts "creating departments"
Department.create(
  name: "Truck #1",
  folder_id: 1
)
Department.create(
  name: "Truck #2",
  folder_id: 1
)
Department.create(
  name: "Truck #3",
  folder_id: 1
)
departments = Department.all()

prices = [1599, 6499, 4999, 399, 12999, 3199, 1299, 1399, 54999, 24999]


20.times do
  Item.create(
    name: Faker::Commerce.product_name,
    description: Faker::Commerce.color,
    image: open_asset('wrench.avif'),
    price_cents: prices.sample(),
    quantity: rand(1..20),

    folder_id: 1,
    department_id: rand(1..3)
  )
end

puts "seeded database"