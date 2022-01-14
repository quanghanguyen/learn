USE HowKteam 
GO


-- SELECT INTO
-- Lấy hết data của 1 bảng nào đó rồi đưa vào bảng mới
-- bảng mới này có các record tương ứng

SELECT * INTO TableA
FROM dbo.GIAOVIEN


-- Lấy dữ liệu lưu vào Table tương ứng, với data là cột HoTen của dbo.GIAOVIEN
SELECT HoTen INTO TableB
FROM dbo.GIAOVIEN 


-- Thêm đk
SELECT HoTen INTO TableC
FROM dbo.GIAOVIEN 
WHERE LUONG > 2000


-- Tạo ra một bảng mới y chang nhưng không có dữ liệu

SELECT *
INTO GVBK
FROM dbo.GIAOVIEN 
WHERE 6>10 -- ở đây phải bỏ 1 điều kiện sai để các giá trị trong bảng rỗng
