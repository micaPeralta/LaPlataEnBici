require 'test_helper'

class FunctionControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get function_index_url
    assert_response :success
  end

end
