<?php
/*
* Plugin Name: Gutenberg Starter Block
* Description: A custom starter foundation for developing Gutenberg blocks
* Author: Heather Weaver
* Author URI: https://www.hweaver.com
* Version: 1.0.0
*/

function block_foundation_plugin_registration() {
    // register our block script with wordpress
    wp_register_script(
        'block-foundation-js',
        plugins_url('/blocks/dist/blocks.build.js', __FILE__),
        array('wp-blocks', 'wp-element')
    );

    // register base styles
    wp_register_style(
        'block-foundation-style',
        plugins_url('/blocks/dist/blocks.style.build.css', __FILE__),
        array( 'wp-blocks' )
    );

    // also register editor styles
    wp_register_style(
        'block-foundation-editor-style',
        plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
        array( 'wp-edit-blocks' )
    );

    // enqueue scripts in the eidtor
    register_block_type('block-foundation/main', array(
        'editor_script' => 'block-foundation-js',
        'editor_style' => 'block-foundation-editor-style',
        'style' => 'block-foundation-style'
    ));
}

add_action('init', 'block_foundation_plugin_registration');