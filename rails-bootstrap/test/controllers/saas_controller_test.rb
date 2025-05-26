require "test_helper"

class SaasControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get saas_index_url
    assert_response :success
  end
end
