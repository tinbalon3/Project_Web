

            // Đối tượng validator
            function Validator(options)
            {
            var selectorRules={};
            // Hàm xóa hiển thị sai
            function DeleteErrorMessage(inputElement,errorElement)
            {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
            }
            // Ham thuc hien validate
            function validate(inputElement,rule)
            {
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
            var errorMessage;
            //lấy ra các rules của selector
            var rules = selectorRules[rule.selector];
            //Lặp qua từng rule và kiểm tra
            //Nếu có lỗi thì dừng việc kiểm tra
            //Chạy từng hàm có trong từng trường theo thứ tự bên file html
            //Hàm nào có lỗi thì sẽ trả về một message, thì sẽ dừng và chạy logic phía dưới
            //Nếu cả 2 hàm ko có lỗi thì sẽ xóa đi khung đỏ
            for(let i=0;i<rules.length;i++)
            {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage)
            break; 
            }
            if(errorMessage)
            {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
            }
            else
            {
            DeleteErrorMessage(inputElement,errorElement);
            }
            //Nếu không phải chuỗi rỗng thì convert sang true -> 2 dấu chấm than
            //Nếu 1 dấu chấm than thì phủ định ngược lại
            return !!errorMessage;
            }
            // Lay element can validate
            var formElement = document.querySelector(options.form)
            if(formElement)
            {
            formElement.onsubmit = (e) =>
            {
            //Bỏ hành vi mặc định của submit form đi
            e.preventDefault();

            //Lặp qua từng rules và validate luôn
            var isValid=true; //Biến kiểm tra xem form đã nhập đúng hết chưa
            options.rules.forEach(function(rule)
            {
            var inputElement = formElement.querySelector(rule.selector);
            if(validate(inputElement,rule))
            {
            isValid = false;
            }
            })
            if(isValid)
            {
            //Trường hợp submit với js
            // Lấy ra tất cả thẻ có name, tùy vào yêu cầu bài toán mà có thêm [name]:not(disable) 
            // để lấy ra những ô input có name nhưng ko có disable
            if(typeof options.onSubmit === "function")
            {
            var EnableInput = formElement.querySelectorAll('[name]');
            var formValue = Array.from(EnableInput).reduce(function(value, input)
            {
            return (value[input.name] = input.value) && value;
            },{});
            options.onSubmit(formValue);
            }
            else
            {

            }
            }
            else
            {
            console.log("Có lỗi")
            }
            }
            //Lặp qua mỗi rule và xử lý (lắng nghe sự kiến blur, input, ...)
            options.rules.forEach(function(rule)
            {
            // lưu lại các rule cho mỗi input

            if(Array.isArray(selectorRules[rule.selector]))
            {
            selectorRules[rule.selector].push(rule.test)
            }
            else
            {
            selectorRules[rule.selector] = [rule.test]
            }
            var inputElement = formElement.querySelector(rule.selector);

            if(inputElement)
            {
            // Xử lí trường hợp blur ra ngoài
            inputElement.onblur = () =>{
            validate(inputElement,rule);
            }
            // XỬ lí input thì tắt thông báo
            inputElement.oninput = () => {
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            DeleteErrorMessage(inputElement,errorElement);
            }
            }

            });
            }


            }
            // Định nghĩa các rules
            Validator.isRequired = function(selector, message)
            {
            return {
            selector,
            test(value)
            {
            return value.trim() ? undefined : message || "Vui lòng nhập trường này"
            }
            };
            }
            Validator.isEmail = function(selector, message)
            {
            return {
            selector,
            test(value)
            {
            var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            return regex.test(value) ? undefined : message || "Trường này phải là email"
            }
            };
            }
            Validator.isMinlength = function(selector,min, message)
            {
            return {
            selector,
            test(value)
            {
            return value.length >= min ? undefined : message || "Vui lòng nhập tối thiểu 6 kí tự";
            }
            };
            }
            Validator.isConfirmed = function(selector,getComfirmValue, message)
            {

            return {
            selector,
            test(value)
            {
            return value == getComfirmValue() ? undefined : message || 'Giá trị nhập không chính xác'
            }
            };
            }


