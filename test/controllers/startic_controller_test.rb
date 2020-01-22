require 'test_helper'

class StarticControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get startic_index_url
    assert_response :success
  end

end
