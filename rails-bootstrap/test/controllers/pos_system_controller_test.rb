require "test_helper"

class PosSystemControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pos_system_index_url
    assert_response :success
  end
end
