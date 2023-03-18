# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_18_184415) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.bigint "folders_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "folder_id"
    t.index ["folders_id"], name: "index_departments_on_folders_id"
  end

  create_table "folders", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "image"
    t.integer "price_cents"
    t.integer "quantity"
    t.bigint "folders_id"
    t.bigint "departments_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "folder_id"
    t.integer "department_id"
    t.index ["departments_id"], name: "index_items_on_departments_id"
    t.index ["folders_id"], name: "index_items_on_folders_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.bigint "folders_id"
    t.bigint "departments_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "folder_id"
    t.integer "department_id"
    t.index ["departments_id"], name: "index_users_on_departments_id"
    t.index ["folders_id"], name: "index_users_on_folders_id"
  end

  add_foreign_key "departments", "folders", column: "folders_id"
  add_foreign_key "items", "departments", column: "departments_id"
  add_foreign_key "items", "folders", column: "folders_id"
  add_foreign_key "users", "departments", column: "departments_id"
  add_foreign_key "users", "folders", column: "folders_id"
end
