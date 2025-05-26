require "test_helper"

class CallCenterControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get call_center_index_url
    assert_response :success
  end
end
