set(SOURCE_FILES
        main.cpp
        Mesh.cpp
        Shader.cpp
        Window.cpp
        )

set(HEADER_FILES
        Mesh.h
        Shader.h
        Window.h
        )

add_executable(5.CodeCleanUp
        ${SOURCE_FILES}
        ${HEADER_FILES}
        )
target_link_libraries(5.CodeCleanUp
        ${GL_LIBS}
        )