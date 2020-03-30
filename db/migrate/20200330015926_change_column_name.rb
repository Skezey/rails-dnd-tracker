class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :characters, :class, :char_class
  end
end
