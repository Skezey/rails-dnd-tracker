class CreateAttributes < ActiveRecord::Migration[6.0]
  def change
    create_table :attributes do |t|
      t.integer :stength
      t.integer :constitution
      t.integer :defense
      t.integer :dexterity
      t.integer :intelligence
      t.integer :charisma
      t.integer :wisdom
      t.integer :willpower
      t.integer :perception
      t.integer :luck
      t.belongs_to :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
