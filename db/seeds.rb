100.times do
  Menu.create(
    item: Faker::Food.dish,
    description: Faker::Food.description,
    price: Faker::Commerce.price.to_f
  )
end
