class CreateCharacterAttributes < ActiveRecord::Migration[6.0]
  def change
    create_table :character_attributes do |t|
      t.string :strength
      t.string :charisma
      t.string :intelligence
      t.string :dexterity
      t.string :constitution
      t.string :wisdom
      t.belongs_to :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
