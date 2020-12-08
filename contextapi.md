# Context API

Context cung cấp cho bạn một cách để truyền dữ liệu xuống cây component mà không cần phải truyền props xuống ở tất cả các cấp component.

# Dùng khi nào?

Những thứ thuộc về context là dữ liệu được coi là global như thông tin người dùng, hay thông tin giỏ hàng...

- Dữ liệu cần share ở nhiều Component

# Build Context API

- Context : object lưu trữ giá -> dùng createContext()

- Provider : cung cấp các giá trị cho các Component, dữ liệu đó lấy từ Object Context

- Consumer : là một component có thể sử dụng giá trị của provider và có thể hiển thị giá trị

# Sử dụng Context

Bước 1: định nghĩa 1 Context
=> const AppContext = React.createContext({});

Bước 2: Wrap toàn bộ phần DOM bằng tag Provider và truyền giá trị mà ta muốn share đến các component khác

<AppContext.Provider value={{ username: 'superawesome' }}>
  <div className="App">
    <Navbar />
    <Messages />
  </div>
</AppContext.Provider>

Bước 3: componet Navbar hoặc Messages, chúng ta có thể dụng được username -> useContext(tên_context_b1)

const Navbar = () => {
  const { username } = useContext(AppContext)

  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  )
}

# Tham khảo

- https://insights.magestore.com/posts/thay-the-redux-voi-react-hooks
