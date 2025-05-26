require "test_helper"

class HrmControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hrm_index_url
    assert_response :success
  end
end
